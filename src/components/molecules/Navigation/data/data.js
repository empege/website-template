import img1 from '../../../../assets/images/img1.png'
import img2 from '../../../../assets/images/img2.png'
import img3 from '../../../../assets/images/img3.png'

const data = {
  isMenuActive: false,
  items: [
    {
      id: '1',
      text: 'item1',
      src: 'item-1'
    },
    {
      id: '2',
      text: 'item2',
      src: 'item-2'
    },
    {
      id: '3',
      text: 'item3',
      src: 'item-3'
    },
    {
      id: '4',
      text: 'item4',
      src: 'item-4'
    }
  ],
  topNav: {
    isVisible: true,
    text: 'Top Navigation Text'
  },
  navLogo: true,
  navSocial: {
    isVisible: true,
    items: [
      {
        id: '1',
        text: '1',
        icon: img1,
        src: '#'
      },
      {
        id: '2',
        text: '2',
        icon: img2,
        src: '#'
      },
      {
        id: '3',
        text: '3',
        icon: img3,
        src: '#'
      }
    ]
  },
}

export default data;